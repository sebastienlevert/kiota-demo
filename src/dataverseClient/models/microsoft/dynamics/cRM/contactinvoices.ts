import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Contactinvoices extends Crmbaseentity implements Parsable {
    private _contactid?: string | undefined;
    private _contactinvoiceid?: string | undefined;
    private _contactinvoices_AsyncOperations?: Asyncoperation[] | undefined;
    private _contactinvoices_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _contactinvoices_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _contactinvoices_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _importsequencenumber?: number | undefined;
    private _invoiceid?: string | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new contactinvoices and sets the default values.
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
     * Gets the contactinvoiceid property value. 
     * @returns a string
     */
    public get contactinvoiceid() {
        return this._contactinvoiceid;
    };
    /**
     * Sets the contactinvoiceid property value. 
     * @param value Value to set for the contactinvoiceid property.
     */
    public set contactinvoiceid(value: string | undefined) {
        this._contactinvoiceid = value;
    };
    /**
     * Gets the contactinvoices_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get contactinvoices_AsyncOperations() {
        return this._contactinvoices_AsyncOperations;
    };
    /**
     * Sets the contactinvoices_AsyncOperations property value. 
     * @param value Value to set for the contactinvoices_AsyncOperations property.
     */
    public set contactinvoices_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._contactinvoices_AsyncOperations = value;
    };
    /**
     * Gets the contactinvoices_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get contactinvoices_BulkDeleteFailures() {
        return this._contactinvoices_BulkDeleteFailures;
    };
    /**
     * Sets the contactinvoices_BulkDeleteFailures property value. 
     * @param value Value to set for the contactinvoices_BulkDeleteFailures property.
     */
    public set contactinvoices_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._contactinvoices_BulkDeleteFailures = value;
    };
    /**
     * Gets the contactinvoices_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get contactinvoices_MailboxTrackingFolders() {
        return this._contactinvoices_MailboxTrackingFolders;
    };
    /**
     * Sets the contactinvoices_MailboxTrackingFolders property value. 
     * @param value Value to set for the contactinvoices_MailboxTrackingFolders property.
     */
    public set contactinvoices_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._contactinvoices_MailboxTrackingFolders = value;
    };
    /**
     * Gets the contactinvoices_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get contactinvoices_PrincipalObjectAttributeAccesses() {
        return this._contactinvoices_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the contactinvoices_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the contactinvoices_PrincipalObjectAttributeAccesses property.
     */
    public set contactinvoices_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._contactinvoices_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "contactid": (o, n) => { (o as unknown as Contactinvoices).contactid = n.getStringValue(); },
            "contactinvoiceid": (o, n) => { (o as unknown as Contactinvoices).contactinvoiceid = n.getStringValue(); },
            "contactinvoices_AsyncOperations": (o, n) => { (o as unknown as Contactinvoices).contactinvoices_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "contactinvoices_BulkDeleteFailures": (o, n) => { (o as unknown as Contactinvoices).contactinvoices_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "contactinvoices_MailboxTrackingFolders": (o, n) => { (o as unknown as Contactinvoices).contactinvoices_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "contactinvoices_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Contactinvoices).contactinvoices_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Contactinvoices).importsequencenumber = n.getNumberValue(); },
            "invoiceid": (o, n) => { (o as unknown as Contactinvoices).invoiceid = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Contactinvoices).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Contactinvoices).overriddencreatedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Contactinvoices).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Contactinvoices).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Contactinvoices).versionnumber = n.getNumberValue(); },
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
     * Gets the invoiceid property value. 
     * @returns a string
     */
    public get invoiceid() {
        return this._invoiceid;
    };
    /**
     * Sets the invoiceid property value. 
     * @param value Value to set for the invoiceid property.
     */
    public set invoiceid(value: string | undefined) {
        this._invoiceid = value;
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
        writer.writeStringValue("contactinvoiceid", this.contactinvoiceid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("contactinvoices_AsyncOperations", this.contactinvoices_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("contactinvoices_BulkDeleteFailures", this.contactinvoices_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("contactinvoices_MailboxTrackingFolders", this.contactinvoices_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("contactinvoices_PrincipalObjectAttributeAccesses", this.contactinvoices_PrincipalObjectAttributeAccesses);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("invoiceid", this.invoiceid);
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
