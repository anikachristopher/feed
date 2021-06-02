class RemoveServiceNameFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :service_name, :string
  end
end
