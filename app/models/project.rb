class Project < ApplicationRecord
  validates :name, presence: true

  has_one :project_stat
  has_many :project_page_count_timelines, through: :project_stat
  has_many :project_word_count_timelines, through: :project_stat
  has_many :project_submission_streak_timelines, through: :project_stat
  has_many :project_badges, through: :project_stat

  has_many :assignments
  belongs_to :user
end