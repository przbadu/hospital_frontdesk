namespace :start do
  desc 'Start development Server'
  task :development do
    exec 'foreman start -f Procfile.dev'
  end

  desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true npm postinstall && foreman start'
  end
end
