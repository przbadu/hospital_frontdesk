2.times do
  # race = Patient.race.values.sample
  gender = ['male', 'female'].sample
  age = (0..70).to_a.sample
  # service_type = Patient.service_type.values.sample
  service_type = ['opd', 'emergency'].sample

  patient = Patient.new(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    gender: gender,
    age: age,
    fee_amount: '12',
    address: "Godawari - 1, attariya kailali",
    service_type: service_type,
  )

  if patient.age.to_i >= 60
    patient.free_amount = true
  end

  # Add patient histories
  # times = [1,2,3].sample
  # times.times do
  #   day = (1..10).to_a.sample
  #   month = (1..12).to_a.sample
  #   year = "2074"
  #   patient.patient_histories.new(day: day, month: month, year: year)
  # end

  patient.save!
  print "."
end

puts "Imported successfully!"
