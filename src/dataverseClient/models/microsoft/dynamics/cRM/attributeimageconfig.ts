import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Syncerror} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Attributeimageconfig extends Crmbaseentity implements Parsable {
    private _attributeimageconfig_AsyncOperations?: Asyncoperation[] | undefined;
    private _attributeimageconfig_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _attributeimageconfig_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _attributeimageconfig_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _attributeimageconfig_SyncErrors?: Syncerror[] | undefined;
    private _attributeimageconfigid?: string | undefined;
    private _attributelogicalname?: string | undefined;
    private _canstorefullimage?: boolean | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _ismanaged?: boolean | undefined;
    private _overwritetime?: Date | undefined;
    private _parententitylogicalname?: string | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the attributeimageconfig_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get attributeimageconfig_AsyncOperations() {
        return this._attributeimageconfig_AsyncOperations;
    };
    /**
     * Sets the attributeimageconfig_AsyncOperations property value. 
     * @param value Value to set for the attributeimageconfig_AsyncOperations property.
     */
    public set attributeimageconfig_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._attributeimageconfig_AsyncOperations = value;
    };
    /**
     * Gets the attributeimageconfig_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get attributeimageconfig_BulkDeleteFailures() {
        return this._attributeimageconfig_BulkDeleteFailures;
    };
    /**
     * Sets the attributeimageconfig_BulkDeleteFailures property value. 
     * @param value Value to set for the attributeimageconfig_BulkDeleteFailures property.
     */
    public set attributeimageconfig_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._attributeimageconfig_BulkDeleteFailures = value;
    };
    /**
     * Gets the attributeimageconfig_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get attributeimageconfig_MailboxTrackingFolders() {
        return this._attributeimageconfig_MailboxTrackingFolders;
    };
    /**
     * Sets the attributeimageconfig_MailboxTrackingFolders property value. 
     * @param value Value to set for the attributeimageconfig_MailboxTrackingFolders property.
     */
    public set attributeimageconfig_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._attributeimageconfig_MailboxTrackingFolders = value;
    };
    /**
     * Gets the attributeimageconfig_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get attributeimageconfig_PrincipalObjectAttributeAccesses() {
        return this._attributeimageconfig_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the attributeimageconfig_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the attributeimageconfig_PrincipalObjectAttributeAccesses property.
     */
    public set attributeimageconfig_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._attributeimageconfig_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the attributeimageconfig_SyncErrors property value. 
     * @returns a syncerror
     */
    public get attributeimageconfig_SyncErrors() {
        return this._attributeimageconfig_SyncErrors;
    };
    /**
     * Sets the attributeimageconfig_SyncErrors property value. 
     * @param value Value to set for the attributeimageconfig_SyncErrors property.
     */
    public set attributeimageconfig_SyncErrors(value: Syncerror[] | undefined) {
        this._attributeimageconfig_SyncErrors = value;
    };
    /**
     * Gets the attributeimageconfigid property value. 
     * @returns a string
     */
    public get attributeimageconfigid() {
        return this._attributeimageconfigid;
    };
    /**
     * Sets the attributeimageconfigid property value. 
     * @param value Value to set for the attributeimageconfigid property.
     */
    public set attributeimageconfigid(value: string | undefined) {
        this._attributeimageconfigid = value;
    };
    /**
     * Gets the attributelogicalname property value. 
     * @returns a string
     */
    public get attributelogicalname() {
        return this._attributelogicalname;
    };
    /**
     * Sets the attributelogicalname property value. 
     * @param value Value to set for the attributelogicalname property.
     */
    public set attributelogicalname(value: string | undefined) {
        this._attributelogicalname = value;
    };
    /**
     * Gets the canstorefullimage property value. 
     * @returns a boolean
     */
    public get canstorefullimage() {
        return this._canstorefullimage;
    };
    /**
     * Sets the canstorefullimage property value. 
     * @param value Value to set for the canstorefullimage property.
     */
    public set canstorefullimage(value: boolean | undefined) {
        this._canstorefullimage = value;
    };
    /**
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
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
     * Instantiates a new attributeimageconfig and sets the default values.
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
            "attributeimageconfig_AsyncOperations": (o, n) => { (o as unknown as Attributeimageconfig).attributeimageconfig_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "attributeimageconfig_BulkDeleteFailures": (o, n) => { (o as unknown as Attributeimageconfig).attributeimageconfig_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "attributeimageconfig_MailboxTrackingFolders": (o, n) => { (o as unknown as Attributeimageconfig).attributeimageconfig_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "attributeimageconfig_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Attributeimageconfig).attributeimageconfig_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "attributeimageconfig_SyncErrors": (o, n) => { (o as unknown as Attributeimageconfig).attributeimageconfig_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "attributeimageconfigid": (o, n) => { (o as unknown as Attributeimageconfig).attributeimageconfigid = n.getStringValue(); },
            "attributelogicalname": (o, n) => { (o as unknown as Attributeimageconfig).attributelogicalname = n.getStringValue(); },
            "canstorefullimage": (o, n) => { (o as unknown as Attributeimageconfig).canstorefullimage = n.getBooleanValue(); },
            "componentidunique": (o, n) => { (o as unknown as Attributeimageconfig).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Attributeimageconfig).componentstate = n.getNumberValue(); },
            "ismanaged": (o, n) => { (o as unknown as Attributeimageconfig).ismanaged = n.getBooleanValue(); },
            "overwritetime": (o, n) => { (o as unknown as Attributeimageconfig).overwritetime = n.getDateValue(); },
            "parententitylogicalname": (o, n) => { (o as unknown as Attributeimageconfig).parententitylogicalname = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Attributeimageconfig).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Attributeimageconfig).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the parententitylogicalname property value. 
     * @returns a string
     */
    public get parententitylogicalname() {
        return this._parententitylogicalname;
    };
    /**
     * Sets the parententitylogicalname property value. 
     * @param value Value to set for the parententitylogicalname property.
     */
    public set parententitylogicalname(value: string | undefined) {
        this._parententitylogicalname = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Asyncoperation>("attributeimageconfig_AsyncOperations", this.attributeimageconfig_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("attributeimageconfig_BulkDeleteFailures", this.attributeimageconfig_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("attributeimageconfig_MailboxTrackingFolders", this.attributeimageconfig_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("attributeimageconfig_PrincipalObjectAttributeAccesses", this.attributeimageconfig_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("attributeimageconfig_SyncErrors", this.attributeimageconfig_SyncErrors);
        writer.writeStringValue("attributeimageconfigid", this.attributeimageconfigid);
        writer.writeStringValue("attributelogicalname", this.attributelogicalname);
        writer.writeBooleanValue("canstorefullimage", this.canstorefullimage);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("parententitylogicalname", this.parententitylogicalname);
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
