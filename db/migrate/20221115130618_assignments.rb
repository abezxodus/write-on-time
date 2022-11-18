class Assignments < ActiveRecord::Migration[5.2]
  def change
    create_table :assignments do |t|
      t.string :name, null: false
      t.datetime :due_date, null: false, default: -> { 'CURRENT_TIMESTAMP' }
      t.string :note
      t.string :page_count_req, default: "0"
      t.string :word_count_req, default: "0"
      t.string :edit, null: false, default: ""
      t.boolean :email_reminder, default: false
      t.boolean :text_reminder, default: false
      t.boolean :open, null: false, default: true
      t.boolean :past_due, null: false, default: false

      t.belongs_to :project

      t.timestamps
    end
  end
end
