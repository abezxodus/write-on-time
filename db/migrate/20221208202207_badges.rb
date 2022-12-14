class Badges < ActiveRecord::Migration[5.2]
  def change
    create_table :badges do |t|
      t.string :word_badge, null: false, default: ""
      t.string :page_badge, null: false, default: ""
      t.string :streak_badge, null: false, default: ""
      t.string :total_assignments_badge, null: false, default: ""
      t.string :on_time_assignments_badge, null: false, default: ""
    
      t.belongs_to :stat

      t.timestamps
    end
  end
end
