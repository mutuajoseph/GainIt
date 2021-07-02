## Alembic notes
pip install alembic

alembic init alembic

configure sqlalchemy url in env.py in the alembic folder 

to run migrations, run
    - alembic revision --autogenerate -m "New Migration"
    - alembic upgrade head

run migrations on docker using
    - docker-compose run app alembic revision --autogenerate -m "Migration Message"
    - docker-compose alembic upgrade head