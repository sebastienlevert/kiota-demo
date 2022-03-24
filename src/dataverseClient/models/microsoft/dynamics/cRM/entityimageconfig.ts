import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Syncerror} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entityimageconfig extends Crmbaseentity implements Parsable {
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _entityimageconfig_AsyncOperations?: Asyncoperation[] | undefined;
    private _entityimageconfig_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _entityimageconfig_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _entityimageconfig_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _entityimageconfig_SyncErrors?: Syncerror[] | undefined;
    private _entityimageconfigid?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _overwritetime?: Date | undefined;
    private _parententitylogicalname?: string | undefined;
    private _primaryimageattribute?: string | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
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
     * Instantiates a new entityimageconfig and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the entityimageconfig_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get entityimageconfig_AsyncOperations() {
        return this._entityimageconfig_AsyncOperations;
    };
    /**
     * Sets the entityimageconfig_AsyncOperations property value. 
     * @param value Value to set for the entityimageconfig_AsyncOperations property.
     */
    public set entityimageconfig_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._entityimageconfig_AsyncOperations = value;
    };
    /**
     * Gets the entityimageconfig_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get entityimageconfig_BulkDeleteFailures() {
        return this._entityimageconfig_BulkDeleteFailures;
    };
    /**
     * Sets the entityimageconfig_BulkDeleteFailures property value. 
     * @param value Value to set for the entityimageconfig_BulkDeleteFailures property.
     */
    public set entityimageconfig_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._entityimageconfig_BulkDeleteFailures = value;
    };
    /**
     * Gets the entityimageconfig_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get entityimageconfig_MailboxTrackingFolders() {
        return this._entityimageconfig_MailboxTrackingFolders;
    };
    /**
     * Sets the entityimageconfig_MailboxTrackingFolders property value. 
     * @param value Value to set for the entityimageconfig_MailboxTrackingFolders property.
     */
    public set entityimageconfig_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._entityimageconfig_MailboxTrackingFolders = value;
    };
    /**
     * Gets the entityimageconfig_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get entityimageconfig_PrincipalObjectAttributeAccesses() {
        return this._entityimageconfig_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the entityimageconfig_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the entityimageconfig_PrincipalObjectAttributeAccesses property.
     */
    public set entityimageconfig_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._entityimageconfig_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the entityimageconfig_SyncErrors property value. 
     * @returns a syncerror
     */
    public get entityimageconfig_SyncErrors() {
        return this._entityimageconfig_SyncErrors;
    };
    /**
     * Sets the entityimageconfig_SyncErrors property value. 
     * @param value Value to set for the entityimageconfig_SyncErrors property.
     */
    public set entityimageconfig_SyncErrors(value: Syncerror[] | undefined) {
        this._entityimageconfig_SyncErrors = value;
    };
    /**
     * Gets the entityimageconfigid property value. 
     * @returns a string
     */
    public get entityimageconfigid() {
        return this._entityimageconfigid;
    };
    /**
     * Sets the entityimageconfigid property value. 
     * @param value Value to set for the entityimageconfigid property.
     */
    public set entityimageconfigid(value: string | undefined) {
        this._entityimageconfigid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "componentidunique": (o, n) => { (o as unknown as Entityimageconfig).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Entityimageconfig).componentstate = n.getNumberValue(); },
            "entityimageconfig_AsyncOperations": (o, n) => { (o as unknown as Entityimageconfig).entityimageconfig_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "entityimageconfig_BulkDeleteFailures": (o, n) => { (o as unknown as Entityimageconfig).entityimageconfig_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "entityimageconfig_MailboxTrackingFolders": (o, n) => { (o as unknown as Entityimageconfig).entityimageconfig_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "entityimageconfig_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Entityimageconfig).entityimageconfig_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "entityimageconfig_SyncErrors": (o, n) => { (o as unknown as Entityimageconfig).entityimageconfig_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "entityimageconfigid": (o, n) => { (o as unknown as Entityimageconfig).entityimageconfigid = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Entityimageconfig).ismanaged = n.getBooleanValue(); },
            "overwritetime": (o, n) => { (o as unknown as Entityimageconfig).overwritetime = n.getDateValue(); },
            "parententitylogicalname": (o, n) => { (o as unknown as Entityimageconfig).parententitylogicalname = n.getStringValue(); },
            "primaryimageattribute": (o, n) => { (o as unknown as Entityimageconfig).primaryimageattribute = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Entityimageconfig).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entityimageconfig).versionnumber = n.getNumberValue(); },
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
     * Gets the primaryimageattribute property value. 
     * @returns a string
     */
    public get primaryimageattribute() {
        return this._primaryimageattribute;
    };
    /**
     * Sets the primaryimageattribute property value. 
     * @param value Value to set for the primaryimageattribute property.
     */
    public set primaryimageattribute(value: string | undefined) {
        this._primaryimageattribute = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeCollectionOfObjectValues<Asyncoperation>("entityimageconfig_AsyncOperations", this.entityimageconfig_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("entityimageconfig_BulkDeleteFailures", this.entityimageconfig_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("entityimageconfig_MailboxTrackingFolders", this.entityimageconfig_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("entityimageconfig_PrincipalObjectAttributeAccesses", this.entityimageconfig_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("entityimageconfig_SyncErrors", this.entityimageconfig_SyncErrors);
        writer.writeStringValue("entityimageconfigid", this.entityimageconfigid);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("parententitylogicalname", this.parententitylogicalname);
        writer.writeStringValue("primaryimageattribute", this.primaryimageattribute);
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
