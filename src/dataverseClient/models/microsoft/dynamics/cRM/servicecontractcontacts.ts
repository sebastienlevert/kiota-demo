import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Servicecontractcontacts extends Crmbaseentity implements Parsable {
    private _contactid?: string | undefined;
    private _contractid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _servicecontractcontactid?: string | undefined;
    private _servicecontractcontacts_AsyncOperations?: Asyncoperation[] | undefined;
    private _servicecontractcontacts_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _servicecontractcontacts_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _servicecontractcontacts_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _servicelevel?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new servicecontractcontacts and sets the default values.
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
     * Gets the contractid property value. 
     * @returns a string
     */
    public get contractid() {
        return this._contractid;
    };
    /**
     * Sets the contractid property value. 
     * @param value Value to set for the contractid property.
     */
    public set contractid(value: string | undefined) {
        this._contractid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "contactid": (o, n) => { (o as unknown as Servicecontractcontacts).contactid = n.getStringValue(); },
            "contractid": (o, n) => { (o as unknown as Servicecontractcontacts).contractid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Servicecontractcontacts).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Servicecontractcontacts).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Servicecontractcontacts).overriddencreatedon = n.getDateValue(); },
            "servicecontractcontactid": (o, n) => { (o as unknown as Servicecontractcontacts).servicecontractcontactid = n.getStringValue(); },
            "servicecontractcontacts_AsyncOperations": (o, n) => { (o as unknown as Servicecontractcontacts).servicecontractcontacts_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "servicecontractcontacts_BulkDeleteFailures": (o, n) => { (o as unknown as Servicecontractcontacts).servicecontractcontacts_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "servicecontractcontacts_MailboxTrackingFolders": (o, n) => { (o as unknown as Servicecontractcontacts).servicecontractcontacts_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "servicecontractcontacts_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Servicecontractcontacts).servicecontractcontacts_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "servicelevel": (o, n) => { (o as unknown as Servicecontractcontacts).servicelevel = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Servicecontractcontacts).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Servicecontractcontacts).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Servicecontractcontacts).versionnumber = n.getNumberValue(); },
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
        writer.writeStringValue("contractid", this.contractid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("servicecontractcontactid", this.servicecontractcontactid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("servicecontractcontacts_AsyncOperations", this.servicecontractcontacts_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("servicecontractcontacts_BulkDeleteFailures", this.servicecontractcontacts_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("servicecontractcontacts_MailboxTrackingFolders", this.servicecontractcontacts_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("servicecontractcontacts_PrincipalObjectAttributeAccesses", this.servicecontractcontacts_PrincipalObjectAttributeAccesses);
        writer.writeNumberValue("servicelevel", this.servicelevel);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the servicecontractcontactid property value. 
     * @returns a string
     */
    public get servicecontractcontactid() {
        return this._servicecontractcontactid;
    };
    /**
     * Sets the servicecontractcontactid property value. 
     * @param value Value to set for the servicecontractcontactid property.
     */
    public set servicecontractcontactid(value: string | undefined) {
        this._servicecontractcontactid = value;
    };
    /**
     * Gets the servicecontractcontacts_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get servicecontractcontacts_AsyncOperations() {
        return this._servicecontractcontacts_AsyncOperations;
    };
    /**
     * Sets the servicecontractcontacts_AsyncOperations property value. 
     * @param value Value to set for the servicecontractcontacts_AsyncOperations property.
     */
    public set servicecontractcontacts_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._servicecontractcontacts_AsyncOperations = value;
    };
    /**
     * Gets the servicecontractcontacts_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get servicecontractcontacts_BulkDeleteFailures() {
        return this._servicecontractcontacts_BulkDeleteFailures;
    };
    /**
     * Sets the servicecontractcontacts_BulkDeleteFailures property value. 
     * @param value Value to set for the servicecontractcontacts_BulkDeleteFailures property.
     */
    public set servicecontractcontacts_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._servicecontractcontacts_BulkDeleteFailures = value;
    };
    /**
     * Gets the servicecontractcontacts_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get servicecontractcontacts_MailboxTrackingFolders() {
        return this._servicecontractcontacts_MailboxTrackingFolders;
    };
    /**
     * Sets the servicecontractcontacts_MailboxTrackingFolders property value. 
     * @param value Value to set for the servicecontractcontacts_MailboxTrackingFolders property.
     */
    public set servicecontractcontacts_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._servicecontractcontacts_MailboxTrackingFolders = value;
    };
    /**
     * Gets the servicecontractcontacts_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get servicecontractcontacts_PrincipalObjectAttributeAccesses() {
        return this._servicecontractcontacts_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the servicecontractcontacts_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the servicecontractcontacts_PrincipalObjectAttributeAccesses property.
     */
    public set servicecontractcontacts_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._servicecontractcontacts_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the servicelevel property value. 
     * @returns a integer
     */
    public get servicelevel() {
        return this._servicelevel;
    };
    /**
     * Sets the servicelevel property value. 
     * @param value Value to set for the servicelevel property.
     */
    public set servicelevel(value: number | undefined) {
        this._servicelevel = value;
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
