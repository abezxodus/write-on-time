class ProjectSubmissionStreakTimelines < ActiveRecord::Migration[5.2]
  def change
    create_table :project_submission_streak_timelines do |t|
      t.date :submission_date, null: false, default: -> { 'CURRENT_TIMESTAMP' }
      t.integer :start_count, null: false, default: 0
      t.boolean :new_submission, null: false, default: true
      t.integer :end_count, null: false, default: 0
    
      t.belongs_to :project

      t.timestamps
    end
  end
end
