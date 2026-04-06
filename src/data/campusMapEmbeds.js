/**
 * OpenStreetMap iframe embeds per campus — matches addresses in i18n `campuses.*_full_addr`.
 * Commas in query params MUST be %2C or some browsers/servers truncate marker/bbox.
 * bbox = min_lon, min_lat, max_lon, max_lat; marker = lat, lon
 */
export const CAMPUS_MAP_EMBED = {
  /** Leimbachstrasse 21, 8041 Zürich */
  zurich:
    'https://www.openstreetmap.org/export/embed.html?bbox=8.500%2C47.356%2C8.524%2C47.372&layer=mapnik&marker=47.3636%2C8.512',

  /** Haselstrasse 6, 5400 Baden */
  baden:
    'https://www.openstreetmap.org/export/embed.html?bbox=8.300%2C47.468%2C8.316%2C47.478&layer=mapnik&marker=47.4732%2C8.3075',

  /** Floraweg 1A, 7310 Bad Ragaz */
  bad_ragaz:
    'https://www.openstreetmap.org/export/embed.html?bbox=9.496%2C47.002%2C9.510%2C47.012&layer=mapnik&marker=47.0065%2C9.5025',

  /** Löberenstrasse 40, 6300 Zug */
  zug:
    'https://www.openstreetmap.org/export/embed.html?bbox=8.508%2C47.166%2C8.526%2C47.178&layer=mapnik&marker=47.1715%2C8.519',
}
