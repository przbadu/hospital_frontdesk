class PatientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :gender, :age,
    :service_type, :fee_amount, :free, :created_at, :updated_at
end
