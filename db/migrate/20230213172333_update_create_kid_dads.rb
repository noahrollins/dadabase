class UpdateCreateKidDads < ActiveRecord::Migration[7.0]
  def change
    change_table :kid_dads do |t|
      t.change :dad_id, :bigint, null: true
      t.change :kid_id, :bigint, null: true
    end
  end
end
