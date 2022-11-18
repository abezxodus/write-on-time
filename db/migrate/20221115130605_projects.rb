class Projects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description
      t.string :edit, null: false, default: ""
      t.boolean :open, null: false, default: true

      t.belongs_to :user

      t.timestamps
    end
  end
end
