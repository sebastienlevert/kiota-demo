import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Contactleads extends Crmbaseentity implements Parsable {
    private _contactid?: string | undefined;
    private _contactleadid?: string | undefined;
    private _contactleads_AsyncOperations?: Asyncoperation[] | undefined;
    private _contactleads_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _contactleads_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _contactleads_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _importsequencenumber?: number | undefined;
    private _leadid?: string | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new contactleads and sets the default values.
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
     * Gets the contactleadid property value. 
     * @returns a string
     */
    public get contactleadid() {
        return this._contactleadid;
    };
    /**
     * Sets the contactleadid property value. 
     * @param value Value to set for the contactleadid property.
     */
    public set contactleadid(value: string | undefined) {
        this._contactleadid = value;
    };
    /**
     * Gets the contactleads_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get contactleads_AsyncOperations() {
        return this._contactleads_AsyncOperations;
    };
    /**
     * Sets the contactleads_AsyncOperations property value. 
     * @param value Value to set for the contactleads_AsyncOperations property.
     */
    public set contactleads_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._contactleads_AsyncOperations = value;
    };
    /**
     * Gets the contactleads_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get contactleads_BulkDeleteFailures() {
        return this._contactleads_BulkDeleteFailures;
    };
    /**
     * Sets the contactleads_BulkDeleteFailures property value. 
     * @param value Value to set for the contactleads_BulkDeleteFailures property.
     */
    public set contactleads_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._contactleads_BulkDeleteFailures = value;
    };
    /**
     * Gets the contactleads_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get contactleads_MailboxTrackingFolders() {
        return this._contactleads_MailboxTrackingFolders;
    };
    /**
     * Sets the contactleads_MailboxTrackingFolders property value. 
     * @param value Value to set for the contactleads_MailboxTrackingFolders property.
     */
    public set contactleads_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._contactleads_MailboxTrackingFolders = value;
    };
    /**
     * Gets the contactleads_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get contactleads_PrincipalObjectAttributeAccesses() {
        return this._contactleads_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the contactleads_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the contactleads_PrincipalObjectAttributeAccesses property.
     */
    public set contactleads_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._contactleads_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "contactid": (o, n) => { (o as unknown as Contactleads).contactid = n.getStringValue(); },
            "contactleadid": (o, n) => { (o as unknown as Contactleads).contactleadid = n.getStringValue(); },
            "contactleads_AsyncOperations": (o, n) => { (o as unknown as Contactleads).contactleads_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "contactleads_BulkDeleteFailures": (o, n) => { (o as unknown as Contactleads).contactleads_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "contactleads_MailboxTrackingFolders": (o, n) => { (o as unknown as Contactleads).contactleads_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "contactleads_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Contactleads).contactleads_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Contactleads).importsequencenumber = n.getNumberValue(); },
            "leadid": (o, n) => { (o as unknown as Contactleads).leadid = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Contactleads).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Contactleads).overriddencreatedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Contactleads).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Contactleads).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Contactleads).versionnumber = n.getNumberValue(); },
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
     * Gets the leadid property value. 
     * @returns a string
     */
    public get leadid() {
        return this._leadid;
    };
    /**
     * Sets the leadid property value. 
     * @param value Value to set for the leadid property.
     */
    public set leadid(value: string | undefined) {
        this._leadid = value;
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
        writer.writeStringValue("contactleadid", this.contactleadid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("contactleads_AsyncOperations", this.contactleads_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("contactleads_BulkDeleteFailures", this.contactleads_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("contactleads_MailboxTrackingFolders", this.contactleads_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("contactleads_PrincipalObjectAttributeAccesses", this.contactleads_PrincipalObjectAttributeAccesses);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("leadid", this.leadid);
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
