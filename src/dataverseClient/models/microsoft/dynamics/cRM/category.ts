import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCategoryFromDiscriminatorValue} from './createCategoryFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Businessunit, Crmbaseentity, Knowledgearticle, Principal, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Category extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentcategoryid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _category_parent_category?: Category[] | undefined;
    private _category_SyncErrors?: Syncerror[] | undefined;
    private _categoryid?: string | undefined;
    private _categorynumber?: string | undefined;
    private _createdon?: Date | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _knowledgearticle_category?: Knowledgearticle[] | undefined;
    private _lk_category_createdby?: Systemuser | undefined;
    private _lk_category_createdonbehalfby?: Systemuser | undefined;
    private _lk_category_modifiedby?: Systemuser | undefined;
    private _lk_category_modifiedonbehalfby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _parentcategoryid?: Category | undefined;
    private _sequencenumber?: number | undefined;
    private _title?: string | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _parentcategoryid_value property value. 
     * @returns a string
     */
    public get _parentcategoryid_value() {
        return this.__parentcategoryid_value;
    };
    /**
     * Sets the _parentcategoryid_value property value. 
     * @param value Value to set for the _parentcategoryid_value property.
     */
    public set _parentcategoryid_value(value: string | undefined) {
        this.__parentcategoryid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the category_parent_category property value. 
     * @returns a category
     */
    public get category_parent_category() {
        return this._category_parent_category;
    };
    /**
     * Sets the category_parent_category property value. 
     * @param value Value to set for the category_parent_category property.
     */
    public set category_parent_category(value: Category[] | undefined) {
        this._category_parent_category = value;
    };
    /**
     * Gets the category_SyncErrors property value. 
     * @returns a syncerror
     */
    public get category_SyncErrors() {
        return this._category_SyncErrors;
    };
    /**
     * Sets the category_SyncErrors property value. 
     * @param value Value to set for the Category_SyncErrors property.
     */
    public set category_SyncErrors(value: Syncerror[] | undefined) {
        this._category_SyncErrors = value;
    };
    /**
     * Gets the categoryid property value. 
     * @returns a string
     */
    public get categoryid() {
        return this._categoryid;
    };
    /**
     * Sets the categoryid property value. 
     * @param value Value to set for the categoryid property.
     */
    public set categoryid(value: string | undefined) {
        this._categoryid = value;
    };
    /**
     * Gets the categorynumber property value. 
     * @returns a string
     */
    public get categorynumber() {
        return this._categorynumber;
    };
    /**
     * Sets the categorynumber property value. 
     * @param value Value to set for the categorynumber property.
     */
    public set categorynumber(value: string | undefined) {
        this._categorynumber = value;
    };
    /**
     * Instantiates a new category and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Category)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Category)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Category)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Category)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Category)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Category)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Category)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Category)._owninguser_value = n.getStringValue(); },
            "_parentcategoryid_value": (o, n) => { (o as unknown as Category)._parentcategoryid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Category)._transactioncurrencyid_value = n.getStringValue(); },
            "category_parent_category": (o, n) => { (o as unknown as Category).category_parent_category = n.getCollectionOfObjectValues<Category>(createCategoryFromDiscriminatorValue); },
            "category_SyncErrors": (o, n) => { (o as unknown as Category).category_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "categoryid": (o, n) => { (o as unknown as Category).categoryid = n.getStringValue(); },
            "categorynumber": (o, n) => { (o as unknown as Category).categorynumber = n.getStringValue(); },
            "createdon": (o, n) => { (o as unknown as Category).createdon = n.getDateValue(); },
            "description": (o, n) => { (o as unknown as Category).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Category).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Category).importsequencenumber = n.getNumberValue(); },
            "knowledgearticle_category": (o, n) => { (o as unknown as Category).knowledgearticle_category = n.getCollectionOfObjectValues<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "lk_category_createdby": (o, n) => { (o as unknown as Category).lk_category_createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "lk_category_createdonbehalfby": (o, n) => { (o as unknown as Category).lk_category_createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "lk_category_modifiedby": (o, n) => { (o as unknown as Category).lk_category_modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "lk_category_modifiedonbehalfby": (o, n) => { (o as unknown as Category).lk_category_modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Category).modifiedon = n.getDateValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Category).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Category).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Category).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "parentcategoryid": (o, n) => { (o as unknown as Category).parentcategoryid = n.getObjectValue<Category>(createCategoryFromDiscriminatorValue); },
            "sequencenumber": (o, n) => { (o as unknown as Category).sequencenumber = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Category).title = n.getStringValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Category).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Category).versionnumber = n.getNumberValue(); },
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
     * Gets the knowledgearticle_category property value. 
     * @returns a knowledgearticle
     */
    public get knowledgearticle_category() {
        return this._knowledgearticle_category;
    };
    /**
     * Sets the knowledgearticle_category property value. 
     * @param value Value to set for the knowledgearticle_category property.
     */
    public set knowledgearticle_category(value: Knowledgearticle[] | undefined) {
        this._knowledgearticle_category = value;
    };
    /**
     * Gets the lk_category_createdby property value. 
     * @returns a systemuser
     */
    public get lk_category_createdby() {
        return this._lk_category_createdby;
    };
    /**
     * Sets the lk_category_createdby property value. 
     * @param value Value to set for the lk_category_createdby property.
     */
    public set lk_category_createdby(value: Systemuser | undefined) {
        this._lk_category_createdby = value;
    };
    /**
     * Gets the lk_category_createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get lk_category_createdonbehalfby() {
        return this._lk_category_createdonbehalfby;
    };
    /**
     * Sets the lk_category_createdonbehalfby property value. 
     * @param value Value to set for the lk_category_createdonbehalfby property.
     */
    public set lk_category_createdonbehalfby(value: Systemuser | undefined) {
        this._lk_category_createdonbehalfby = value;
    };
    /**
     * Gets the lk_category_modifiedby property value. 
     * @returns a systemuser
     */
    public get lk_category_modifiedby() {
        return this._lk_category_modifiedby;
    };
    /**
     * Sets the lk_category_modifiedby property value. 
     * @param value Value to set for the lk_category_modifiedby property.
     */
    public set lk_category_modifiedby(value: Systemuser | undefined) {
        this._lk_category_modifiedby = value;
    };
    /**
     * Gets the lk_category_modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get lk_category_modifiedonbehalfby() {
        return this._lk_category_modifiedonbehalfby;
    };
    /**
     * Sets the lk_category_modifiedonbehalfby property value. 
     * @param value Value to set for the lk_category_modifiedonbehalfby property.
     */
    public set lk_category_modifiedonbehalfby(value: Systemuser | undefined) {
        this._lk_category_modifiedonbehalfby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the parentcategoryid property value. 
     * @returns a category
     */
    public get parentcategoryid() {
        return this._parentcategoryid;
    };
    /**
     * Sets the parentcategoryid property value. 
     * @param value Value to set for the parentcategoryid property.
     */
    public set parentcategoryid(value: Category | undefined) {
        this._parentcategoryid = value;
    };
    /**
     * Gets the sequencenumber property value. 
     * @returns a integer
     */
    public get sequencenumber() {
        return this._sequencenumber;
    };
    /**
     * Sets the sequencenumber property value. 
     * @param value Value to set for the sequencenumber property.
     */
    public set sequencenumber(value: number | undefined) {
        this._sequencenumber = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentcategoryid_value", this._parentcategoryid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Category>("category_parent_category", this.category_parent_category);
        writer.writeCollectionOfObjectValues<Syncerror>("category_SyncErrors", this.category_SyncErrors);
        writer.writeStringValue("categoryid", this.categoryid);
        writer.writeStringValue("categorynumber", this.categorynumber);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeCollectionOfObjectValues<Knowledgearticle>("knowledgearticle_category", this.knowledgearticle_category);
        writer.writeObjectValue<Systemuser>("lk_category_createdby", this.lk_category_createdby);
        writer.writeObjectValue<Systemuser>("lk_category_createdonbehalfby", this.lk_category_createdonbehalfby);
        writer.writeObjectValue<Systemuser>("lk_category_modifiedby", this.lk_category_modifiedby);
        writer.writeObjectValue<Systemuser>("lk_category_modifiedonbehalfby", this.lk_category_modifiedonbehalfby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Category>("parentcategoryid", this.parentcategoryid);
        writer.writeNumberValue("sequencenumber", this.sequencenumber);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
