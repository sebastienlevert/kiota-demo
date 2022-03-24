import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Leadproduct extends Crmbaseentity implements Parsable {
    private _importsequencenumber?: number | undefined;
    private _leadid?: string | undefined;
    private _leadproduct_AsyncOperations?: Asyncoperation[] | undefined;
    private _leadproduct_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _leadproduct_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _leadproduct_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _leadproductid?: string | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _productid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new leadproduct and sets the default values.
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
            "importsequencenumber": (o, n) => { (o as unknown as Leadproduct).importsequencenumber = n.getNumberValue(); },
            "leadid": (o, n) => { (o as unknown as Leadproduct).leadid = n.getStringValue(); },
            "leadproduct_AsyncOperations": (o, n) => { (o as unknown as Leadproduct).leadproduct_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "leadproduct_BulkDeleteFailures": (o, n) => { (o as unknown as Leadproduct).leadproduct_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "leadproduct_MailboxTrackingFolders": (o, n) => { (o as unknown as Leadproduct).leadproduct_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "leadproduct_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Leadproduct).leadproduct_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "leadproductid": (o, n) => { (o as unknown as Leadproduct).leadproductid = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Leadproduct).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Leadproduct).overriddencreatedon = n.getDateValue(); },
            "productid": (o, n) => { (o as unknown as Leadproduct).productid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Leadproduct).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Leadproduct).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Leadproduct).versionnumber = n.getNumberValue(); },
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
     * Gets the leadproduct_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get leadproduct_AsyncOperations() {
        return this._leadproduct_AsyncOperations;
    };
    /**
     * Sets the leadproduct_AsyncOperations property value. 
     * @param value Value to set for the leadproduct_AsyncOperations property.
     */
    public set leadproduct_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._leadproduct_AsyncOperations = value;
    };
    /**
     * Gets the leadproduct_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get leadproduct_BulkDeleteFailures() {
        return this._leadproduct_BulkDeleteFailures;
    };
    /**
     * Sets the leadproduct_BulkDeleteFailures property value. 
     * @param value Value to set for the leadproduct_BulkDeleteFailures property.
     */
    public set leadproduct_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._leadproduct_BulkDeleteFailures = value;
    };
    /**
     * Gets the leadproduct_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get leadproduct_MailboxTrackingFolders() {
        return this._leadproduct_MailboxTrackingFolders;
    };
    /**
     * Sets the leadproduct_MailboxTrackingFolders property value. 
     * @param value Value to set for the leadproduct_MailboxTrackingFolders property.
     */
    public set leadproduct_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._leadproduct_MailboxTrackingFolders = value;
    };
    /**
     * Gets the leadproduct_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get leadproduct_PrincipalObjectAttributeAccesses() {
        return this._leadproduct_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the leadproduct_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the leadproduct_PrincipalObjectAttributeAccesses property.
     */
    public set leadproduct_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._leadproduct_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the leadproductid property value. 
     * @returns a string
     */
    public get leadproductid() {
        return this._leadproductid;
    };
    /**
     * Sets the leadproductid property value. 
     * @param value Value to set for the leadproductid property.
     */
    public set leadproductid(value: string | undefined) {
        this._leadproductid = value;
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
     * Gets the productid property value. 
     * @returns a string
     */
    public get productid() {
        return this._productid;
    };
    /**
     * Sets the productid property value. 
     * @param value Value to set for the productid property.
     */
    public set productid(value: string | undefined) {
        this._productid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("leadid", this.leadid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("leadproduct_AsyncOperations", this.leadproduct_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("leadproduct_BulkDeleteFailures", this.leadproduct_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("leadproduct_MailboxTrackingFolders", this.leadproduct_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("leadproduct_PrincipalObjectAttributeAccesses", this.leadproduct_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("leadproductid", this.leadproductid);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("productid", this.productid);
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
