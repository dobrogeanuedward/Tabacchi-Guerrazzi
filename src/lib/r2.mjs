import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
export const r2Prefix='clients/guerrazzi';
export const r2Base='https://pub-b39e5084f7324516a4fe99c212a65c5f.r2.dev';
export function r2Enabled(){return !!(process.env.R2_ACCOUNT_ID&&process.env.R2_ACCESS_KEY_ID&&process.env.R2_SECRET_ACCESS_KEY);}
export async function uploadR2(key,body,contentType){
 if(!key.startsWith(r2Prefix+'/'))throw new Error('Percorso R2 non consentito.');
 if(!r2Enabled())throw new Error('Configurazione R2 richiesta.');
 const client=new S3Client({region:'auto',endpoint:process.env.R2_ENDPOINT||`https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,credentials:{accessKeyId:process.env.R2_ACCESS_KEY_ID,secretAccessKey:process.env.R2_SECRET_ACCESS_KEY}});
 await client.send(new PutObjectCommand({Bucket:process.env.R2_BUCKET||'dogostudio',Key:key,Body:body,ContentType:contentType,CacheControl:'public, max-age=31536000, immutable',IfNoneMatch:'*'}));
 return `${r2Base}/${key}`;
}
