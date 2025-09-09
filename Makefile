.PHONY: bootstrap dev build start docker-up docker-down env-check

bootstrap: ## Install toolchain & deps
	@node ./scripts/bootstrap.mjs

dev: ## Run server & client together (concurrently)
	@npm run dev

build: ## Build all workspaces
	@npm run build

start: ## Start only the server (expects built code)
	@npm --prefix server run start

docker-up: ## Run full stack via Docker
	@docker compose up --build

docker-down: ## Stop and remove containers & volumes
	@docker compose down -v

env-check: ## Verify required env vars
	@node ./scripts/env-verify.mjs
	@echo "All required env vars are set!"
