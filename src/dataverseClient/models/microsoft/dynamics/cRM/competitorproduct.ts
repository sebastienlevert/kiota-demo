import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Competitorproduct extends Crmbaseentity implements Parsable {
    private _competitorid?: string | undefined;
    private _competitorproduct_AsyncOperations?: Asyncoperation[] | undefined;
    private _competitorproduct_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _competitorproduct_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _competitorproduct_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _competitorproductid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _productid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the competitorid property value. 
     * @returns a string
     */
    public get competitorid() {
        return this._competitorid;
    };
    /**
     * Sets the competitorid property value. 
     * @param value Value to set for the competitorid property.
     */
    public set competitorid(value: string | undefined) {
        this._competitorid = value;
    };
    /**
     * Gets the competitorproduct_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get competitorproduct_AsyncOperations() {
        return this._competitorproduct_AsyncOperations;
    };
    /**
     * Sets the competitorproduct_AsyncOperations property value. 
     * @param value Value to set for the competitorproduct_AsyncOperations property.
     */
    public set competitorproduct_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._competitorproduct_AsyncOperations = value;
    };
    /**
     * Gets the competitorproduct_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get competitorproduct_BulkDeleteFailures() {
        return this._competitorproduct_BulkDeleteFailures;
    };
    /**
     * Sets the competitorproduct_BulkDeleteFailures property value. 
     * @param value Value to set for the competitorproduct_BulkDeleteFailures property.
     */
    public set competitorproduct_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._competitorproduct_BulkDeleteFailures = value;
    };
    /**
     * Gets the competitorproduct_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get competitorproduct_MailboxTrackingFolders() {
        return this._competitorproduct_MailboxTrackingFolders;
    };
    /**
     * Sets the competitorproduct_MailboxTrackingFolders property value. 
     * @param value Value to set for the competitorproduct_MailboxTrackingFolders property.
     */
    public set competitorproduct_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._competitorproduct_MailboxTrackingFolders = value;
    };
    /**
     * Gets the competitorproduct_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get competitorproduct_PrincipalObjectAttributeAccesses() {
        return this._competitorproduct_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the competitorproduct_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the competitorproduct_PrincipalObjectAttributeAccesses property.
     */
    public set competitorproduct_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._competitorproduct_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the competitorproductid property value. 
     * @returns a string
     */
    public get competitorproductid() {
        return this._competitorproductid;
    };
    /**
     * Sets the competitorproductid property value. 
     * @param value Value to set for the competitorproductid property.
     */
    public set competitorproductid(value: string | undefined) {
        this._competitorproductid = value;
    };
    /**
     * Instantiates a new competitorproduct and sets the default values.
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
            "competitorid": (o, n) => { (o as unknown as Competitorproduct).competitorid = n.getStringValue(); },
            "competitorproduct_AsyncOperations": (o, n) => { (o as unknown as Competitorproduct).competitorproduct_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "competitorproduct_BulkDeleteFailures": (o, n) => { (o as unknown as Competitorproduct).competitorproduct_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "competitorproduct_MailboxTrackingFolders": (o, n) => { (o as unknown as Competitorproduct).competitorproduct_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "competitorproduct_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Competitorproduct).competitorproduct_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "competitorproductid": (o, n) => { (o as unknown as Competitorproduct).competitorproductid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Competitorproduct).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Competitorproduct).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Competitorproduct).overriddencreatedon = n.getDateValue(); },
            "productid": (o, n) => { (o as unknown as Competitorproduct).productid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Competitorproduct).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Competitorproduct).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Competitorproduct).versionnumber = n.getNumberValue(); },
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
        writer.writeStringValue("competitorid", this.competitorid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("competitorproduct_AsyncOperations", this.competitorproduct_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("competitorproduct_BulkDeleteFailures", this.competitorproduct_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("competitorproduct_MailboxTrackingFolders", this.competitorproduct_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("competitorproduct_PrincipalObjectAttributeAccesses", this.competitorproduct_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("competitorproductid", this.competitorproductid);
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
