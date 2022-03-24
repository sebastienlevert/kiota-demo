import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Accountleads extends Crmbaseentity implements Parsable {
    private _accountid?: string | undefined;
    private _accountleadid?: string | undefined;
    private _accountleads_AsyncOperations?: Asyncoperation[] | undefined;
    private _accountleads_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _accountleads_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _accountleads_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _importsequencenumber?: number | undefined;
    private _leadid?: string | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the accountid property value. 
     * @returns a string
     */
    public get accountid() {
        return this._accountid;
    };
    /**
     * Sets the accountid property value. 
     * @param value Value to set for the accountid property.
     */
    public set accountid(value: string | undefined) {
        this._accountid = value;
    };
    /**
     * Gets the accountleadid property value. 
     * @returns a string
     */
    public get accountleadid() {
        return this._accountleadid;
    };
    /**
     * Sets the accountleadid property value. 
     * @param value Value to set for the accountleadid property.
     */
    public set accountleadid(value: string | undefined) {
        this._accountleadid = value;
    };
    /**
     * Gets the accountleads_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get accountleads_AsyncOperations() {
        return this._accountleads_AsyncOperations;
    };
    /**
     * Sets the accountleads_AsyncOperations property value. 
     * @param value Value to set for the accountleads_AsyncOperations property.
     */
    public set accountleads_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._accountleads_AsyncOperations = value;
    };
    /**
     * Gets the accountleads_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get accountleads_BulkDeleteFailures() {
        return this._accountleads_BulkDeleteFailures;
    };
    /**
     * Sets the accountleads_BulkDeleteFailures property value. 
     * @param value Value to set for the accountleads_BulkDeleteFailures property.
     */
    public set accountleads_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._accountleads_BulkDeleteFailures = value;
    };
    /**
     * Gets the accountleads_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get accountleads_MailboxTrackingFolders() {
        return this._accountleads_MailboxTrackingFolders;
    };
    /**
     * Sets the accountleads_MailboxTrackingFolders property value. 
     * @param value Value to set for the accountleads_MailboxTrackingFolders property.
     */
    public set accountleads_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._accountleads_MailboxTrackingFolders = value;
    };
    /**
     * Gets the accountleads_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get accountleads_PrincipalObjectAttributeAccesses() {
        return this._accountleads_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the accountleads_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the accountleads_PrincipalObjectAttributeAccesses property.
     */
    public set accountleads_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._accountleads_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Instantiates a new accountleads and sets the default values.
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
            "accountid": (o, n) => { (o as unknown as Accountleads).accountid = n.getStringValue(); },
            "accountleadid": (o, n) => { (o as unknown as Accountleads).accountleadid = n.getStringValue(); },
            "accountleads_AsyncOperations": (o, n) => { (o as unknown as Accountleads).accountleads_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "accountleads_BulkDeleteFailures": (o, n) => { (o as unknown as Accountleads).accountleads_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "accountleads_MailboxTrackingFolders": (o, n) => { (o as unknown as Accountleads).accountleads_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "accountleads_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Accountleads).accountleads_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Accountleads).importsequencenumber = n.getNumberValue(); },
            "leadid": (o, n) => { (o as unknown as Accountleads).leadid = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Accountleads).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Accountleads).overriddencreatedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Accountleads).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Accountleads).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Accountleads).versionnumber = n.getNumberValue(); },
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
        writer.writeStringValue("accountid", this.accountid);
        writer.writeStringValue("accountleadid", this.accountleadid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("accountleads_AsyncOperations", this.accountleads_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("accountleads_BulkDeleteFailures", this.accountleads_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("accountleads_MailboxTrackingFolders", this.accountleads_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("accountleads_PrincipalObjectAttributeAccesses", this.accountleads_PrincipalObjectAttributeAccesses);
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
