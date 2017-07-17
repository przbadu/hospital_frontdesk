class CreatePatients < ActiveRecord::Migration[5.1]
  def change
    create_table :patients do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.string :gender, null: false
      t.integer :age, null: false
      t.text :address
      t.string :service_type, null: false
      t.string :fee_amount, null: false
      t.boolean :free, null: false, default: false

      t.timestamps
    end
  end
end
