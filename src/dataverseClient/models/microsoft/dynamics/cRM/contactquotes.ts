import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Contactquotes extends Crmbaseentity implements Parsable {
    private _contactid?: string | undefined;
    private _contactquoteid?: string | undefined;
    private _contactquotes_AsyncOperations?: Asyncoperation[] | undefined;
    private _contactquotes_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _contactquotes_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _contactquotes_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _quoteid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new contactquotes and sets the default values.
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
     * Gets the contactquoteid property value. 
     * @returns a string
     */
    public get contactquoteid() {
        return this._contactquoteid;
    };
    /**
     * Sets the contactquoteid property value. 
     * @param value Value to set for the contactquoteid property.
     */
    public set contactquoteid(value: string | undefined) {
        this._contactquoteid = value;
    };
    /**
     * Gets the contactquotes_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get contactquotes_AsyncOperations() {
        return this._contactquotes_AsyncOperations;
    };
    /**
     * Sets the contactquotes_AsyncOperations property value. 
     * @param value Value to set for the contactquotes_AsyncOperations property.
     */
    public set contactquotes_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._contactquotes_AsyncOperations = value;
    };
    /**
     * Gets the contactquotes_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get contactquotes_BulkDeleteFailures() {
        return this._contactquotes_BulkDeleteFailures;
    };
    /**
     * Sets the contactquotes_BulkDeleteFailures property value. 
     * @param value Value to set for the contactquotes_BulkDeleteFailures property.
     */
    public set contactquotes_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._contactquotes_BulkDeleteFailures = value;
    };
    /**
     * Gets the contactquotes_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get contactquotes_MailboxTrackingFolders() {
        return this._contactquotes_MailboxTrackingFolders;
    };
    /**
     * Sets the contactquotes_MailboxTrackingFolders property value. 
     * @param value Value to set for the contactquotes_MailboxTrackingFolders property.
     */
    public set contactquotes_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._contactquotes_MailboxTrackingFolders = value;
    };
    /**
     * Gets the contactquotes_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get contactquotes_PrincipalObjectAttributeAccesses() {
        return this._contactquotes_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the contactquotes_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the contactquotes_PrincipalObjectAttributeAccesses property.
     */
    public set contactquotes_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._contactquotes_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "contactid": (o, n) => { (o as unknown as Contactquotes).contactid = n.getStringValue(); },
            "contactquoteid": (o, n) => { (o as unknown as Contactquotes).contactquoteid = n.getStringValue(); },
            "contactquotes_AsyncOperations": (o, n) => { (o as unknown as Contactquotes).contactquotes_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "contactquotes_BulkDeleteFailures": (o, n) => { (o as unknown as Contactquotes).contactquotes_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "contactquotes_MailboxTrackingFolders": (o, n) => { (o as unknown as Contactquotes).contactquotes_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "contactquotes_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Contactquotes).contactquotes_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Contactquotes).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Contactquotes).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Contactquotes).overriddencreatedon = n.getDateValue(); },
            "quoteid": (o, n) => { (o as unknown as Contactquotes).quoteid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Contactquotes).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Contactquotes).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Contactquotes).versionnumber = n.getNumberValue(); },
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
     * Gets the quoteid property value. 
     * @returns a string
     */
    public get quoteid() {
        return this._quoteid;
    };
    /**
     * Sets the quoteid property value. 
     * @param value Value to set for the quoteid property.
     */
    public set quoteid(value: string | undefined) {
        this._quoteid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("contactid", this.contactid);
        writer.writeStringValue("contactquoteid", this.contactquoteid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("contactquotes_AsyncOperations", this.contactquotes_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("contactquotes_BulkDeleteFailures", this.contactquotes_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("contactquotes_MailboxTrackingFolders", this.contactquotes_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("contactquotes_PrincipalObjectAttributeAccesses", this.contactquotes_PrincipalObjectAttributeAccesses);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("quoteid", this.quoteid);
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
