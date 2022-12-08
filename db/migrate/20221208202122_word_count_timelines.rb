class WordCountTimelines < ActiveRecord::Migration[5.2]
  def change
    create_table :word_count_timelines do |t|
      t.date :submission_date, null: false, default: -> { 'CURRENT_TIMESTAMP' }
      t.integer :start_count, null: false, default: 0
      t.integer :new_word_count, null: false, default: 0
      t.integer :end_count, null: false, default: 0
    
      t.belongs_to :stat

      t.timestamps
    end
  end
end
