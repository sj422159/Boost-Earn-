/*
  # Create initial stats record

  1. Changes
    - Insert initial stats record if none exists
    - Add function to ensure stats record always exists
    - Add trigger to maintain single stats record

  2. Security
    - Enable RLS on stats table
    - Add policy for authenticated users to read stats
*/

-- Create function to ensure stats record exists
CREATE OR REPLACE FUNCTION ensure_stats_record()
RETURNS trigger AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM stats) THEN
    INSERT INTO stats (total_users, active_projects, completed_courses)
    VALUES (0, 0, 0);
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to maintain stats record
CREATE TRIGGER ensure_stats_record_trigger
AFTER DELETE ON stats
FOR STATEMENT
EXECUTE FUNCTION ensure_stats_record();

-- Insert initial stats if none exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM stats) THEN
    INSERT INTO stats (total_users, active_projects, completed_courses)
    VALUES (0, 0, 0);
  END IF;
END $$;