import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entitlementproducts extends Crmbaseentity implements Parsable {
    private _entitlementid?: string | undefined;
    private _entitlementproductid?: string | undefined;
    private _entitlementproducts_AsyncOperations?: Asyncoperation[] | undefined;
    private _entitlementproducts_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _entitlementproducts_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _entitlementproducts_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _productid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new entitlementproducts and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the entitlementproductid property value. 
     * @returns a string
     */
    public get entitlementproductid() {
        return this._entitlementproductid;
    };
    /**
     * Sets the entitlementproductid property value. 
     * @param value Value to set for the entitlementproductid property.
     */
    public set entitlementproductid(value: string | undefined) {
        this._entitlementproductid = value;
    };
    /**
     * Gets the entitlementproducts_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get entitlementproducts_AsyncOperations() {
        return this._entitlementproducts_AsyncOperations;
    };
    /**
     * Sets the entitlementproducts_AsyncOperations property value. 
     * @param value Value to set for the entitlementproducts_AsyncOperations property.
     */
    public set entitlementproducts_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._entitlementproducts_AsyncOperations = value;
    };
    /**
     * Gets the entitlementproducts_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get entitlementproducts_BulkDeleteFailures() {
        return this._entitlementproducts_BulkDeleteFailures;
    };
    /**
     * Sets the entitlementproducts_BulkDeleteFailures property value. 
     * @param value Value to set for the entitlementproducts_BulkDeleteFailures property.
     */
    public set entitlementproducts_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._entitlementproducts_BulkDeleteFailures = value;
    };
    /**
     * Gets the entitlementproducts_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get entitlementproducts_MailboxTrackingFolders() {
        return this._entitlementproducts_MailboxTrackingFolders;
    };
    /**
     * Sets the entitlementproducts_MailboxTrackingFolders property value. 
     * @param value Value to set for the entitlementproducts_MailboxTrackingFolders property.
     */
    public set entitlementproducts_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._entitlementproducts_MailboxTrackingFolders = value;
    };
    /**
     * Gets the entitlementproducts_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get entitlementproducts_PrincipalObjectAttributeAccesses() {
        return this._entitlementproducts_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the entitlementproducts_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the entitlementproducts_PrincipalObjectAttributeAccesses property.
     */
    public set entitlementproducts_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._entitlementproducts_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "entitlementid": (o, n) => { (o as unknown as Entitlementproducts).entitlementid = n.getStringValue(); },
            "entitlementproductid": (o, n) => { (o as unknown as Entitlementproducts).entitlementproductid = n.getStringValue(); },
            "entitlementproducts_AsyncOperations": (o, n) => { (o as unknown as Entitlementproducts).entitlementproducts_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "entitlementproducts_BulkDeleteFailures": (o, n) => { (o as unknown as Entitlementproducts).entitlementproducts_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "entitlementproducts_MailboxTrackingFolders": (o, n) => { (o as unknown as Entitlementproducts).entitlementproducts_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "entitlementproducts_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Entitlementproducts).entitlementproducts_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Entitlementproducts).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Entitlementproducts).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Entitlementproducts).overriddencreatedon = n.getDateValue(); },
            "productid": (o, n) => { (o as unknown as Entitlementproducts).productid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Entitlementproducts).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Entitlementproducts).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entitlementproducts).versionnumber = n.getNumberValue(); },
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
        writer.writeStringValue("entitlementid", this.entitlementid);
        writer.writeStringValue("entitlementproductid", this.entitlementproductid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("entitlementproducts_AsyncOperations", this.entitlementproducts_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("entitlementproducts_BulkDeleteFailures", this.entitlementproducts_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("entitlementproducts_MailboxTrackingFolders", this.entitlementproducts_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("entitlementproducts_PrincipalObjectAttributeAccesses", this.entitlementproducts_PrincipalObjectAttributeAccesses);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
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
