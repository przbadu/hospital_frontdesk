# == Schema Information
#
# Table name: patients
#
#  id           :integer          not null, primary key
#  first_name   :string           not null
#  last_name    :string
#  gender       :string           not null
#  age          :integer          not null
#  address      :text
#  service_type :string           not null
#  fee_amount   :string           not null
#  free         :boolean          default("false"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Patient < ApplicationRecord
  validates :first_name, presence: true
  validates :gender, presence: true
  validates :age, presence: true
  validates :service_type, presence: true
  validates :fee_amount, presence: true
end
