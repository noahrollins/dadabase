class UpdateCreateKidDadsTable < ActiveRecord::Migration[7.0]
  def change
    change_column :kid_dads, :dad_id, :bigint, foreign_key: true, null: true
    change_column :kid_dads, :kid_id, :bigint, foreign_key: true, null: true
  end
end