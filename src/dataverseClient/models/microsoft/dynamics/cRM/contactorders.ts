import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Contactorders extends Crmbaseentity implements Parsable {
    private _contactid?: string | undefined;
    private _contactorderid?: string | undefined;
    private _contactorders_AsyncOperations?: Asyncoperation[] | undefined;
    private _contactorders_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _contactorders_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _contactorders_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _salesorderid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new contactorders and sets the default values.
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
     * Gets the contactorderid property value. 
     * @returns a string
     */
    public get contactorderid() {
        return this._contactorderid;
    };
    /**
     * Sets the contactorderid property value. 
     * @param value Value to set for the contactorderid property.
     */
    public set contactorderid(value: string | undefined) {
        this._contactorderid = value;
    };
    /**
     * Gets the contactorders_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get contactorders_AsyncOperations() {
        return this._contactorders_AsyncOperations;
    };
    /**
     * Sets the contactorders_AsyncOperations property value. 
     * @param value Value to set for the contactorders_AsyncOperations property.
     */
    public set contactorders_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._contactorders_AsyncOperations = value;
    };
    /**
     * Gets the contactorders_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get contactorders_BulkDeleteFailures() {
        return this._contactorders_BulkDeleteFailures;
    };
    /**
     * Sets the contactorders_BulkDeleteFailures property value. 
     * @param value Value to set for the contactorders_BulkDeleteFailures property.
     */
    public set contactorders_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._contactorders_BulkDeleteFailures = value;
    };
    /**
     * Gets the contactorders_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get contactorders_MailboxTrackingFolders() {
        return this._contactorders_MailboxTrackingFolders;
    };
    /**
     * Sets the contactorders_MailboxTrackingFolders property value. 
     * @param value Value to set for the contactorders_MailboxTrackingFolders property.
     */
    public set contactorders_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._contactorders_MailboxTrackingFolders = value;
    };
    /**
     * Gets the contactorders_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get contactorders_PrincipalObjectAttributeAccesses() {
        return this._contactorders_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the contactorders_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the contactorders_PrincipalObjectAttributeAccesses property.
     */
    public set contactorders_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._contactorders_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "contactid": (o, n) => { (o as unknown as Contactorders).contactid = n.getStringValue(); },
            "contactorderid": (o, n) => { (o as unknown as Contactorders).contactorderid = n.getStringValue(); },
            "contactorders_AsyncOperations": (o, n) => { (o as unknown as Contactorders).contactorders_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "contactorders_BulkDeleteFailures": (o, n) => { (o as unknown as Contactorders).contactorders_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "contactorders_MailboxTrackingFolders": (o, n) => { (o as unknown as Contactorders).contactorders_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "contactorders_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Contactorders).contactorders_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Contactorders).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Contactorders).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Contactorders).overriddencreatedon = n.getDateValue(); },
            "salesorderid": (o, n) => { (o as unknown as Contactorders).salesorderid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Contactorders).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Contactorders).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Contactorders).versionnumber = n.getNumberValue(); },
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
     * Gets the salesorderid property value. 
     * @returns a string
     */
    public get salesorderid() {
        return this._salesorderid;
    };
    /**
     * Sets the salesorderid property value. 
     * @param value Value to set for the salesorderid property.
     */
    public set salesorderid(value: string | undefined) {
        this._salesorderid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("contactid", this.contactid);
        writer.writeStringValue("contactorderid", this.contactorderid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("contactorders_AsyncOperations", this.contactorders_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("contactorders_BulkDeleteFailures", this.contactorders_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("contactorders_MailboxTrackingFolders", this.contactorders_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("contactorders_PrincipalObjectAttributeAccesses", this.contactorders_PrincipalObjectAttributeAccesses);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("salesorderid", this.salesorderid);
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
