import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Syncerror} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entityindex extends Crmbaseentity implements Parsable {
    private _componentstate?: number | undefined;
    private _entityindex_AsyncOperations?: Asyncoperation[] | undefined;
    private _entityindex_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _entityindex_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _entityindex_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _entityindex_SyncErrors?: Syncerror[] | undefined;
    private _indexid?: string | undefined;
    private _name?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _recordid?: number | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new entityindex and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the entityindex_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get entityindex_AsyncOperations() {
        return this._entityindex_AsyncOperations;
    };
    /**
     * Sets the entityindex_AsyncOperations property value. 
     * @param value Value to set for the entityindex_AsyncOperations property.
     */
    public set entityindex_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._entityindex_AsyncOperations = value;
    };
    /**
     * Gets the entityindex_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get entityindex_BulkDeleteFailures() {
        return this._entityindex_BulkDeleteFailures;
    };
    /**
     * Sets the entityindex_BulkDeleteFailures property value. 
     * @param value Value to set for the entityindex_BulkDeleteFailures property.
     */
    public set entityindex_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._entityindex_BulkDeleteFailures = value;
    };
    /**
     * Gets the entityindex_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get entityindex_MailboxTrackingFolders() {
        return this._entityindex_MailboxTrackingFolders;
    };
    /**
     * Sets the entityindex_MailboxTrackingFolders property value. 
     * @param value Value to set for the entityindex_MailboxTrackingFolders property.
     */
    public set entityindex_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._entityindex_MailboxTrackingFolders = value;
    };
    /**
     * Gets the entityindex_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get entityindex_PrincipalObjectAttributeAccesses() {
        return this._entityindex_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the entityindex_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the entityindex_PrincipalObjectAttributeAccesses property.
     */
    public set entityindex_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._entityindex_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the entityindex_SyncErrors property value. 
     * @returns a syncerror
     */
    public get entityindex_SyncErrors() {
        return this._entityindex_SyncErrors;
    };
    /**
     * Sets the entityindex_SyncErrors property value. 
     * @param value Value to set for the entityindex_SyncErrors property.
     */
    public set entityindex_SyncErrors(value: Syncerror[] | undefined) {
        this._entityindex_SyncErrors = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "componentstate": (o, n) => { (o as unknown as Entityindex).componentstate = n.getNumberValue(); },
            "entityindex_AsyncOperations": (o, n) => { (o as unknown as Entityindex).entityindex_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "entityindex_BulkDeleteFailures": (o, n) => { (o as unknown as Entityindex).entityindex_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "entityindex_MailboxTrackingFolders": (o, n) => { (o as unknown as Entityindex).entityindex_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "entityindex_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Entityindex).entityindex_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "entityindex_SyncErrors": (o, n) => { (o as unknown as Entityindex).entityindex_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "indexid": (o, n) => { (o as unknown as Entityindex).indexid = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Entityindex).name = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Entityindex).overwritetime = n.getDateValue(); },
            "recordid": (o, n) => { (o as unknown as Entityindex).recordid = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Entityindex).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entityindex).versionnumber = n.getNumberValue(); },
        };
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
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
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeCollectionOfObjectValues<Asyncoperation>("entityindex_AsyncOperations", this.entityindex_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("entityindex_BulkDeleteFailures", this.entityindex_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("entityindex_MailboxTrackingFolders", this.entityindex_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("entityindex_PrincipalObjectAttributeAccesses", this.entityindex_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("entityindex_SyncErrors", this.entityindex_SyncErrors);
        writer.writeStringValue("indexid", this.indexid);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeNumberValue("recordid", this.recordid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
