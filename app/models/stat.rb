class Stat < ApplicationRecord
  belongs_to :user

  has_many :page_count_timelines
  has_many :word_count_timelines
  has_many :submission_streak_timelines
  has_many :badges
end