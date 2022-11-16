class Assignments < ActiveRecord::Migration[5.2]
  def change
    create_table :assignments do |t|
      t.string :name, null: false
      t.datetime :due_date
      t.string :note
      t.string :page_count_req, default: "0"
      t.string :word_count_req, default: "0"
      t.boolean :email_reminder, default: false
      t.boolean :text_reminder, default: false
      t.boolean :open, default: true
      t.boolean :past_due, default: false

      t.belongs_to :project

      t.timestamps
    end
  end
end
