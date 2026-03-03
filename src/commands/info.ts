import { Command, type CommandContext, Declare, Embed } from "seyfert";

@Declare({
    name: "info",
    description: "Muestra información del bot",
})
export default class Info extends Command {
    async run(ctx: CommandContext) {
        const { client } = ctx;
        const uptime = this.formatUptime(client.uptime);
        
        const embed = new Embed()
            .setTitle("📊 Información del Bot")
            .setDescription("Bot construido con Seyfert + Bun")
            .setColor(0x5865F2)
            .addFields([
                {
                    name: "⏱️ Uptime",
                    value: uptime,
                    inline: true,
                },
                {
                    name: "🏓 Latencia",
                    value: `${client.gateway.latency}ms`,
                    inline: true,
                },
                {
                    name: "🖥️ Runtime",
                    value: "Bun",
                    inline: true,
                },
                {
                    name: "📚 Framework",
                    value: "[Seyfert](https://seyfert.dev)",
                    inline: true,
                },
                {
                    name: "🔧 Servidores",
                    value: `${client.cache.guilds?.size ?? 0}`,
                    inline: true,
                },
            ])
            .setFooter({ text: "tsc_bot • The Salty Coder" })
            .setTimestamp();

        await ctx.editOrReply({ embeds: [embed] });
    }

    private formatUptime(ms: number): string {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
        if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
        if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
        return `${seconds}s`;
    }
}
