from django.test import TestCase
from .models import User, Team, Workout, Activity, Leaderboard

class ModelTests(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(str(team), 'Test Team')

    def test_user_creation(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create_user(username='testuser', email='test@example.com', password='pass', team=team)
        self.assertEqual(user.email, 'test@example.com')
        self.assertEqual(user.team, team)

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Pushups', description='Do pushups')
        self.assertEqual(str(workout), 'Pushups')

    def test_activity_creation(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create_user(username='testuser', email='test@example.com', password='pass', team=team)
        workout = Workout.objects.create(name='Pushups', description='Do pushups')
        activity = Activity.objects.create(user=user, workout=workout, duration=30, calories=200)
        self.assertEqual(activity.duration, 30)
        self.assertEqual(activity.calories, 200)

    def test_leaderboard_creation(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create_user(username='testuser', email='test@example.com', password='pass', team=team)
        leaderboard = Leaderboard.objects.create(user=user, score=100)
        self.assertEqual(leaderboard.score, 100)
