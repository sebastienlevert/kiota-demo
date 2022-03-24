import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entitlementtemplateproducts extends Crmbaseentity implements Parsable {
    private _entitlementtemplateid?: string | undefined;
    private _entitlementtemplateproductid?: string | undefined;
    private _entitlementtemplateproducts_AsyncOperations?: Asyncoperation[] | undefined;
    private _entitlementtemplateproducts_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _entitlementtemplateproducts_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _entitlementtemplateproducts_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _productid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new entitlementtemplateproducts and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the entitlementtemplateid property value. 
     * @returns a string
     */
    public get entitlementtemplateid() {
        return this._entitlementtemplateid;
    };
    /**
     * Sets the entitlementtemplateid property value. 
     * @param value Value to set for the entitlementtemplateid property.
     */
    public set entitlementtemplateid(value: string | undefined) {
        this._entitlementtemplateid = value;
    };
    /**
     * Gets the entitlementtemplateproductid property value. 
     * @returns a string
     */
    public get entitlementtemplateproductid() {
        return this._entitlementtemplateproductid;
    };
    /**
     * Sets the entitlementtemplateproductid property value. 
     * @param value Value to set for the entitlementtemplateproductid property.
     */
    public set entitlementtemplateproductid(value: string | undefined) {
        this._entitlementtemplateproductid = value;
    };
    /**
     * Gets the entitlementtemplateproducts_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get entitlementtemplateproducts_AsyncOperations() {
        return this._entitlementtemplateproducts_AsyncOperations;
    };
    /**
     * Sets the entitlementtemplateproducts_AsyncOperations property value. 
     * @param value Value to set for the entitlementtemplateproducts_AsyncOperations property.
     */
    public set entitlementtemplateproducts_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._entitlementtemplateproducts_AsyncOperations = value;
    };
    /**
     * Gets the entitlementtemplateproducts_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get entitlementtemplateproducts_BulkDeleteFailures() {
        return this._entitlementtemplateproducts_BulkDeleteFailures;
    };
    /**
     * Sets the entitlementtemplateproducts_BulkDeleteFailures property value. 
     * @param value Value to set for the entitlementtemplateproducts_BulkDeleteFailures property.
     */
    public set entitlementtemplateproducts_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._entitlementtemplateproducts_BulkDeleteFailures = value;
    };
    /**
     * Gets the entitlementtemplateproducts_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get entitlementtemplateproducts_MailboxTrackingFolders() {
        return this._entitlementtemplateproducts_MailboxTrackingFolders;
    };
    /**
     * Sets the entitlementtemplateproducts_MailboxTrackingFolders property value. 
     * @param value Value to set for the entitlementtemplateproducts_MailboxTrackingFolders property.
     */
    public set entitlementtemplateproducts_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._entitlementtemplateproducts_MailboxTrackingFolders = value;
    };
    /**
     * Gets the entitlementtemplateproducts_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get entitlementtemplateproducts_PrincipalObjectAttributeAccesses() {
        return this._entitlementtemplateproducts_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the entitlementtemplateproducts_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the entitlementtemplateproducts_PrincipalObjectAttributeAccesses property.
     */
    public set entitlementtemplateproducts_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._entitlementtemplateproducts_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "entitlementtemplateid": (o, n) => { (o as unknown as Entitlementtemplateproducts).entitlementtemplateid = n.getStringValue(); },
            "entitlementtemplateproductid": (o, n) => { (o as unknown as Entitlementtemplateproducts).entitlementtemplateproductid = n.getStringValue(); },
            "entitlementtemplateproducts_AsyncOperations": (o, n) => { (o as unknown as Entitlementtemplateproducts).entitlementtemplateproducts_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "entitlementtemplateproducts_BulkDeleteFailures": (o, n) => { (o as unknown as Entitlementtemplateproducts).entitlementtemplateproducts_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "entitlementtemplateproducts_MailboxTrackingFolders": (o, n) => { (o as unknown as Entitlementtemplateproducts).entitlementtemplateproducts_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "entitlementtemplateproducts_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Entitlementtemplateproducts).entitlementtemplateproducts_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Entitlementtemplateproducts).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Entitlementtemplateproducts).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Entitlementtemplateproducts).overriddencreatedon = n.getDateValue(); },
            "productid": (o, n) => { (o as unknown as Entitlementtemplateproducts).productid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Entitlementtemplateproducts).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Entitlementtemplateproducts).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entitlementtemplateproducts).versionnumber = n.getNumberValue(); },
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
        writer.writeStringValue("entitlementtemplateid", this.entitlementtemplateid);
        writer.writeStringValue("entitlementtemplateproductid", this.entitlementtemplateproductid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("entitlementtemplateproducts_AsyncOperations", this.entitlementtemplateproducts_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("entitlementtemplateproducts_BulkDeleteFailures", this.entitlementtemplateproducts_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("entitlementtemplateproducts_MailboxTrackingFolders", this.entitlementtemplateproducts_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("entitlementtemplateproducts_PrincipalObjectAttributeAccesses", this.entitlementtemplateproducts_PrincipalObjectAttributeAccesses);
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
