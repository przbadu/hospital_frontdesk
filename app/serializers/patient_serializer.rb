class PatientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :full_name, :gender, :age,
    :service_type, :fee_amount, :free, :created_at, :updated_at

  def full_name
    "#{object.first_name} #{object.last_name}"
  end
end
