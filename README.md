1.Скачайте і встановіть собі PostgreSQL.

2.В корені проекту зробіть собі файл .env, в ньому пропишіть
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="postgres"
DB_USER="postgres"
DB_PASSWORD="тут ваш пароль бази"
DB_SSLMODE="disable"

3.В терміналі пропишіть команду "npm i"

4.В терміналі пропишіть команду "npm run dev"

5.Проект запуститься на "http://localhost:3000"

6.Коли будете робити пул, видаляйте файл package-lock.json з оновлень, щоб оновлення в ньому не пішло на GitHub
