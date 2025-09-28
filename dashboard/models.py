from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=200)
    student_id = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"{self.name} ({self.student_id})"

class EquationReport(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    from_department = models.CharField(max_length=200)
    to_department = models.CharField(max_length=200)
    subject_count = models.PositiveIntegerField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student.name} - {self.from_department} -> {self.to_department}"
