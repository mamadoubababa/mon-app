pipeline {
    agent any

    environment {
        APP_VERSION = "1.0.${BUILD_NUMBER}"
        PATH = "/usr/bin:${PATH}"
    }

        stage('Install') {
            steps {
                echo 'Installation des dépendances...'
                dir('backend') {
                    sh 'npm install'
                }
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Exécution des tests...'
                dir('backend') {
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Build du frontend...'
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Déploiement...'
                sh '''
                    cp -r frontend/dist /var/www/mon-app || true
                    cd backend && pm2 restart mon-app || pm2 start server.js --name mon-app
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline réussi ! Application déployée.'
        }
        failure {
            echo 'Pipeline échoué ! Vérifiez les logs.'
        }
    }
}
