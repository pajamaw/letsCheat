#bin/sh
for run in {1..20}
do
  echo 'running app'
  /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless  --remote-debugging-port=9222 --disable-gpu \
  & node index.js

  sleep 10s
  echo 'killing headless'
  pkill -f "Chrome --headless"

  sleep 10s

  echo 'completed'
done
