import { z } from 'zod'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { AlloraAPIClient } from '@alloralabs/allora-sdk'

// Import all tool modules
import { registerAlloraTools } from './tools/allora'

export async function createServer(alloraClient: AlloraAPIClient) {
  const server = new McpServer({
    name: 'allora-trading-mcp-server',
    version: '2.0.0',
    description: 'Comprehensive trading and prediction server combining Allora insights with RoboNet execution'
  })

  // Register all tool categories
  await Promise.all([
    registerAlloraTools(server, alloraClient)
    // Additional tool modules will be added here as we implement them:
    // registerStrategyTools(server),
    // registerAgentTools(server), 
    // registerTokenTools(server),
    // registerMarketplaceTools(server),
    // registerAnalyticsTools(server, alloraClient)
  ])

  return server
}
