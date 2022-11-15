class Assignments < ActiveRecord::Migration[5.2]
  def change
    create_table :assignments do |t|
      t.string :assignment_name, null: false
      t.datetime :due_date
      t.string :note
      t.integer :page_count_req
      t.integer :word_count_req
      t.boolean :email_reminder
      t.boolean :text_reminder
      t.boolean :google_calendar
      t.boolean :open
      t.boolean :past_due

      t.belongs_to :project

      t.timestamps
    end
  end
end
