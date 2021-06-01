class AddServiceNameToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :service_name, :string
  end
end
