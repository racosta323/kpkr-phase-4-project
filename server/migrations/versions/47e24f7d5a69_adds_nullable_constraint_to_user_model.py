"""adds nullable constraint to user model

Revision ID: 47e24f7d5a69
Revises: 9617d249e230
Create Date: 2024-03-20 18:09:07.443584

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '47e24f7d5a69'
down_revision = '9617d249e230'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('goals', schema=None) as batch_op:
        batch_op.drop_constraint('fk_goals_user_goal_id_user_goals', type_='foreignkey')
        batch_op.drop_column('user_goal_id')

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('first_name',
               existing_type=sa.VARCHAR(),
               nullable=False)
        batch_op.alter_column('last_name',
               existing_type=sa.VARCHAR(),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('last_name',
               existing_type=sa.VARCHAR(),
               nullable=True)
        batch_op.alter_column('first_name',
               existing_type=sa.VARCHAR(),
               nullable=True)

    with op.batch_alter_table('goals', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_goal_id', sa.INTEGER(), nullable=True))
        batch_op.create_foreign_key('fk_goals_user_goal_id_user_goals', 'user_goals', ['user_goal_id'], ['id'])

    # ### end Alembic commands ###
