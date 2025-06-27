DROP TABLE IF EXISTS experience_tags CASCADE;
DROP TABLE IF EXISTS project_tags CASCADE;
DROP TABLE IF EXISTS experience CASCADE;
DROP TABLE IF EXISTS contact_messages CASCADE;
DROP TABLE IF EXISTS social_media CASCADE;
DROP TABLE IF EXISTS about CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS tag_categories CASCADE;


-- Table for tag categories
CREATE TABLE tag_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for tags
CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    url VARCHAR(255),
    category_id INTEGER REFERENCES tag_categories(id),
    color VARCHAR(7), -- For hex codes like #FF5733
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects table 
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_urls TEXT[],
    project_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Junction table for many-to-many relationship between projects and tags
CREATE TABLE project_tags (
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, tag_id)
);

-- About table
CREATE TABLE about (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    main_skills VARCHAR(255),
    profile_img VARCHAR(255),
    about_me TEXT,
    email VARCHAR(100),
    birth_country VARCHAR(100),
    residence_country VARCHAR(100),
    cv_file_url VARCHAR(255)
);

-- Social media table
CREATE TABLE social_media (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    profile_url VARCHAR(255) NOT NULL,
    icon VARCHAR(255), -- Icon URL or icon name
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Work experience table
CREATE TABLE experience (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE, -- NULL if current job
    location VARCHAR(255),
    is_current BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Junction table for many-to-many relationship between experience and tags
CREATE TABLE experience_tags (
    experience_id INTEGER REFERENCES experience(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (experience_id, tag_id)
);

-- Contact messages table
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample tag categories
INSERT INTO tag_categories (name, description) VALUES
('Frontend', 'Frontend technologies and frameworks'),
('Backend', 'Backend technologies and frameworks'),
('Database', 'Database systems and tools'),
('DevOps', 'DevOps tools and practices');

-- Insert sample tags
INSERT INTO tags (name, description, url, category_id, color) VALUES
('React', 'A JavaScript library for building user interfaces', 'https://reactjs.org', 1, '#61DAFB'),
('Node.js', 'JavaScript runtime built on Chrome''s V8 engine', 'https://nodejs.org', 2, '#68A063'),
('PostgreSQL', 'Open source relational database', 'https://www.postgresql.org', 3, '#336791'),
('Docker', 'Containerization platform', 'https://www.docker.com', 4, '#2496ED');

-- Insert sample projects
INSERT INTO projects (title, description, image_urls, project_url) VALUES
('Portfolio Website', 'Personal portfolio built with React and Node.js', ARRAY['/images/portfolio1.png'], 'https://myportfolio.com'),
('E-commerce API', 'RESTful API for an online store', ARRAY['/images/ecommerce.png'], 'https://github.com/user/ecommerce-api');

-- Link projects to tags
INSERT INTO project_tags (project_id, tag_id) VALUES
(1, 1), -- Portfolio Website uses React
(1, 2), -- Portfolio Website uses Node.js
(2, 2), -- E-commerce API uses Node.js
(2, 3); -- E-commerce API uses PostgreSQL

-- Insert sample about
INSERT INTO about (name, surname, main_skills, profile_img, about_me, email, birth_country, residence_country, cv_file_url) VALUES
('Juan', 'Pérez', 'React, Node.js, PostgreSQL', '/images/profile.jpg', 'Desarrollador fullstack apasionado por la tecnología.', 'juan.perez@email.com', 'Argentina', 'España', '/cv/juan_perez_cv.pdf');

-- Insert sample social media
INSERT INTO social_media (name, profile_url, icon, description) VALUES
('LinkedIn', 'https://linkedin.com/in/juanperez', 'linkedin', 'Perfil profesional en LinkedIn'),
('GitHub', 'https://github.com/juanperez', 'github', 'Repositorios de proyectos');

-- Insert sample experience
INSERT INTO experience (company_name, position, description, start_date, end_date, location, is_current) VALUES
('Tech Solutions', 'Fullstack Developer', 'Desarrollo de aplicaciones web con React y Node.js', '2021-01-01', NULL, 'Madrid, España', TRUE),
('DataSoft', 'Backend Developer', 'Implementación de APIs y gestión de bases de datos', '2019-06-01', '2020-12-31', 'Buenos Aires, Argentina', FALSE);

-- Link experience to tags
INSERT INTO experience_tags (experience_id, tag_id) VALUES
(1, 1), -- Tech Solutions: React
(1, 2), -- Tech Solutions: Node.js
(2, 2), -- DataSoft: Node.js
(2, 3); -- DataSoft: PostgreSQL

-- Insert sample contact messages
INSERT INTO contact_messages (name, email, message) VALUES
('Ana Gómez', 'ana.gomez@email.com', 'Hola, me gustaría saber más sobre tus proyectos.'),
('Carlos Ruiz', 'carlos.ruiz@email.com', '¿Estás disponible para colaborar en un nuevo proyecto?');