pipeline {
    agent any

    environment {
        APP_VERSION = "1.0.${BUILD_NUMBER}"
        PATH = "/usr/bin:${env.PATH}"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Récupération du code depuis GitHub...'
                checkout scm
            }
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
                echo 'Déploiement en cours...'
                sh 'mkdir -p /var/www/mon-app'
                sh 'cp -r frontend/dist/* /var/www/mon-app/'
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
