"""inits tables

Revision ID: 9617d249e230
Revises: 
Create Date: 2024-03-20 14:28:34.236445

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9617d249e230'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('goals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('amount', sa.Integer(), nullable=False),
    sa.Column('goal_name', sa.String(), nullable=False),
    sa.Column('target_date', sa.DateTime(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('user_goal_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_goal_id'], ['user_goals.id'], name=op.f('fk_goals_user_goal_id_user_goals')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_goals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('contributions', sa.Integer(), nullable=False),
    sa.Column('progress', sa.Integer(), nullable=True),
    sa.Column('completed_date', sa.DateTime(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('goal_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['goal_id'], ['goals.id'], name=op.f('fk_user_goals_goal_id_goals')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_user_goals_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('user_goals')
    op.drop_table('goals')
    # ### end Alembic commands ###
