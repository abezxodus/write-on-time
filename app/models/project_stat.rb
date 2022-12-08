class ProjectStat < ApplicationRecord
  belongs_to :project

  has_many :project_page_count_timelines
  has_many :project_word_count_timelines
  has_many :project_submission_streak_timelines
  has_many :project_badges
end