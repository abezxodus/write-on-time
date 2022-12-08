class ProjectStats < ActiveRecord::Migration[5.2]
  def change
    create_table :project_stats do |t|
      t.integer :assignments_open_on_track, null: false, default: 0
      t.integer :assignments_open_past_due, null: false, default: 0
      t.integer :assignments_closed_on_time, null: false, default: 0
      t.integer :assignments_closed_late, null: false, default: 0
      t.integer :total_word_count, null: false, default: 0
      t.integer :total_page_count, null: false, default: 0
      t.integer :submission_streak, null: false, default: 0
      
      t.belongs_to :project

      t.timestamps
    end
  end
end
