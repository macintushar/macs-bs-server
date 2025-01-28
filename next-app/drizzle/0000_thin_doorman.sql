CREATE TABLE `next-app_post` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(256),
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `next-app_stars` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`star_count` integer,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `next-app_post` (`name`);