import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Syncerror} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Indexattributes extends Crmbaseentity implements Parsable {
    private _indexattributeid?: string | undefined;
    private _indexattributes_AsyncOperations?: Asyncoperation[] | undefined;
    private _indexattributes_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _indexattributes_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _indexattributes_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _indexattributes_SyncErrors?: Syncerror[] | undefined;
    private _indexid?: string | undefined;
    private _recordid?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new indexattributes and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "indexattributeid": (o, n) => { (o as unknown as Indexattributes).indexattributeid = n.getStringValue(); },
            "indexattributes_AsyncOperations": (o, n) => { (o as unknown as Indexattributes).indexattributes_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "indexattributes_BulkDeleteFailures": (o, n) => { (o as unknown as Indexattributes).indexattributes_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "indexattributes_MailboxTrackingFolders": (o, n) => { (o as unknown as Indexattributes).indexattributes_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "indexattributes_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Indexattributes).indexattributes_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "indexattributes_SyncErrors": (o, n) => { (o as unknown as Indexattributes).indexattributes_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "indexid": (o, n) => { (o as unknown as Indexattributes).indexid = n.getStringValue(); },
            "recordid": (o, n) => { (o as unknown as Indexattributes).recordid = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Indexattributes).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the indexattributeid property value. 
     * @returns a string
     */
    public get indexattributeid() {
        return this._indexattributeid;
    };
    /**
     * Sets the indexattributeid property value. 
     * @param value Value to set for the indexattributeid property.
     */
    public set indexattributeid(value: string | undefined) {
        this._indexattributeid = value;
    };
    /**
     * Gets the indexattributes_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get indexattributes_AsyncOperations() {
        return this._indexattributes_AsyncOperations;
    };
    /**
     * Sets the indexattributes_AsyncOperations property value. 
     * @param value Value to set for the indexattributes_AsyncOperations property.
     */
    public set indexattributes_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._indexattributes_AsyncOperations = value;
    };
    /**
     * Gets the indexattributes_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get indexattributes_BulkDeleteFailures() {
        return this._indexattributes_BulkDeleteFailures;
    };
    /**
     * Sets the indexattributes_BulkDeleteFailures property value. 
     * @param value Value to set for the indexattributes_BulkDeleteFailures property.
     */
    public set indexattributes_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._indexattributes_BulkDeleteFailures = value;
    };
    /**
     * Gets the indexattributes_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get indexattributes_MailboxTrackingFolders() {
        return this._indexattributes_MailboxTrackingFolders;
    };
    /**
     * Sets the indexattributes_MailboxTrackingFolders property value. 
     * @param value Value to set for the indexattributes_MailboxTrackingFolders property.
     */
    public set indexattributes_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._indexattributes_MailboxTrackingFolders = value;
    };
    /**
     * Gets the indexattributes_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get indexattributes_PrincipalObjectAttributeAccesses() {
        return this._indexattributes_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the indexattributes_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the indexattributes_PrincipalObjectAttributeAccesses property.
     */
    public set indexattributes_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._indexattributes_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the indexattributes_SyncErrors property value. 
     * @returns a syncerror
     */
    public get indexattributes_SyncErrors() {
        return this._indexattributes_SyncErrors;
    };
    /**
     * Sets the indexattributes_SyncErrors property value. 
     * @param value Value to set for the indexattributes_SyncErrors property.
     */
    public set indexattributes_SyncErrors(value: Syncerror[] | undefined) {
        this._indexattributes_SyncErrors = value;
    };
    /**
     * Gets the indexid property value. 
     * @returns a string
     */
    public get indexid() {
        return this._indexid;
    };
    /**
     * Sets the indexid property value. 
     * @param value Value to set for the indexid property.
     */
    public set indexid(value: string | undefined) {
        this._indexid = value;
    };
    /**
     * Gets the recordid property value. 
     * @returns a int64
     */
    public get recordid() {
        return this._recordid;
    };
    /**
     * Sets the recordid property value. 
     * @param value Value to set for the recordid property.
     */
    public set recordid(value: number | undefined) {
        this._recordid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("indexattributeid", this.indexattributeid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("indexattributes_AsyncOperations", this.indexattributes_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("indexattributes_BulkDeleteFailures", this.indexattributes_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("indexattributes_MailboxTrackingFolders", this.indexattributes_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("indexattributes_PrincipalObjectAttributeAccesses", this.indexattributes_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("indexattributes_SyncErrors", this.indexattributes_SyncErrors);
        writer.writeStringValue("indexid", this.indexid);
        writer.writeNumberValue("recordid", this.recordid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
