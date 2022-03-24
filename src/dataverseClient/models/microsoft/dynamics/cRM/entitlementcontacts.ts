import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entitlementcontacts extends Crmbaseentity implements Parsable {
    private _contactid?: string | undefined;
    private _entitlementcontactid?: string | undefined;
    private _entitlementcontacts_AsyncOperations?: Asyncoperation[] | undefined;
    private _entitlementcontacts_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _entitlementcontacts_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _entitlementcontacts_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _entitlementid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new entitlementcontacts and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contactid property value. 
     * @returns a string
     */
    public get contactid() {
        return this._contactid;
    };
    /**
     * Sets the contactid property value. 
     * @param value Value to set for the contactid property.
     */
    public set contactid(value: string | undefined) {
        this._contactid = value;
    };
    /**
     * Gets the entitlementcontactid property value. 
     * @returns a string
     */
    public get entitlementcontactid() {
        return this._entitlementcontactid;
    };
    /**
     * Sets the entitlementcontactid property value. 
     * @param value Value to set for the entitlementcontactid property.
     */
    public set entitlementcontactid(value: string | undefined) {
        this._entitlementcontactid = value;
    };
    /**
     * Gets the entitlementcontacts_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get entitlementcontacts_AsyncOperations() {
        return this._entitlementcontacts_AsyncOperations;
    };
    /**
     * Sets the entitlementcontacts_AsyncOperations property value. 
     * @param value Value to set for the entitlementcontacts_AsyncOperations property.
     */
    public set entitlementcontacts_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._entitlementcontacts_AsyncOperations = value;
    };
    /**
     * Gets the entitlementcontacts_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get entitlementcontacts_BulkDeleteFailures() {
        return this._entitlementcontacts_BulkDeleteFailures;
    };
    /**
     * Sets the entitlementcontacts_BulkDeleteFailures property value. 
     * @param value Value to set for the entitlementcontacts_BulkDeleteFailures property.
     */
    public set entitlementcontacts_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._entitlementcontacts_BulkDeleteFailures = value;
    };
    /**
     * Gets the entitlementcontacts_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get entitlementcontacts_MailboxTrackingFolders() {
        return this._entitlementcontacts_MailboxTrackingFolders;
    };
    /**
     * Sets the entitlementcontacts_MailboxTrackingFolders property value. 
     * @param value Value to set for the entitlementcontacts_MailboxTrackingFolders property.
     */
    public set entitlementcontacts_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._entitlementcontacts_MailboxTrackingFolders = value;
    };
    /**
     * Gets the entitlementcontacts_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get entitlementcontacts_PrincipalObjectAttributeAccesses() {
        return this._entitlementcontacts_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the entitlementcontacts_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the entitlementcontacts_PrincipalObjectAttributeAccesses property.
     */
    public set entitlementcontacts_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._entitlementcontacts_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the entitlementid property value. 
     * @returns a string
     */
    public get entitlementid() {
        return this._entitlementid;
    };
    /**
     * Sets the entitlementid property value. 
     * @param value Value to set for the entitlementid property.
     */
    public set entitlementid(value: string | undefined) {
        this._entitlementid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "contactid": (o, n) => { (o as unknown as Entitlementcontacts).contactid = n.getStringValue(); },
            "entitlementcontactid": (o, n) => { (o as unknown as Entitlementcontacts).entitlementcontactid = n.getStringValue(); },
            "entitlementcontacts_AsyncOperations": (o, n) => { (o as unknown as Entitlementcontacts).entitlementcontacts_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "entitlementcontacts_BulkDeleteFailures": (o, n) => { (o as unknown as Entitlementcontacts).entitlementcontacts_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "entitlementcontacts_MailboxTrackingFolders": (o, n) => { (o as unknown as Entitlementcontacts).entitlementcontacts_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "entitlementcontacts_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Entitlementcontacts).entitlementcontacts_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "entitlementid": (o, n) => { (o as unknown as Entitlementcontacts).entitlementid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Entitlementcontacts).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Entitlementcontacts).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Entitlementcontacts).overriddencreatedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Entitlementcontacts).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Entitlementcontacts).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entitlementcontacts).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("contactid", this.contactid);
        writer.writeStringValue("entitlementcontactid", this.entitlementcontactid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("entitlementcontacts_AsyncOperations", this.entitlementcontacts_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("entitlementcontacts_BulkDeleteFailures", this.entitlementcontacts_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("entitlementcontacts_MailboxTrackingFolders", this.entitlementcontacts_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("entitlementcontacts_PrincipalObjectAttributeAccesses", this.entitlementcontacts_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("entitlementid", this.entitlementid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
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
